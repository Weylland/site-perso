import { render } from "@testing-library/react";
import { ViewTransitionsRouter } from "./ViewTransitionsRouter";

const push = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push }),
}));

function addLink(href: string) {
  const a = document.createElement("a");
  a.href = href;
  a.textContent = "link";
  document.body.appendChild(a);
  return a;
}

describe("ViewTransitionsRouter", () => {
  afterEach(() => {
    push.mockClear();
    // @ts-expect-error -- test-only cleanup of a polyfill we may have added
    delete document.startViewTransition;
  });

  it("renders nothing", () => {
    const { container } = render(<ViewTransitionsRouter />);
    expect(container).toBeEmptyDOMElement();
  });

  it("leaves navigation untouched when the browser has no View Transitions support", () => {
    render(<ViewTransitionsRouter />);
    const link = addLink("/services");

    const event = new MouseEvent("click", { bubbles: true, cancelable: true, button: 0 });
    link.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(false);
    expect(push).not.toHaveBeenCalled();
  });

  it("intercepts same-origin link clicks and routes through startViewTransition", () => {
    const startViewTransition = vi.fn((cb: () => void) => {
      cb();
      return {};
    });
    // @ts-expect-error -- not in jsdom's lib, polyfilled for this test
    document.startViewTransition = startViewTransition;

    render(<ViewTransitionsRouter />);
    const link = addLink("/services");

    const event = new MouseEvent("click", { bubbles: true, cancelable: true, button: 0 });
    link.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(true);
    expect(startViewTransition).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith("/services");
  });

  it("ignores clicks on external links", () => {
    const startViewTransition = vi.fn();
    document.startViewTransition = startViewTransition;

    render(<ViewTransitionsRouter />);
    const link = addLink("https://example.com/elsewhere");

    const event = new MouseEvent("click", { bubbles: true, cancelable: true, button: 0 });
    link.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(false);
    expect(startViewTransition).not.toHaveBeenCalled();
  });
});
