export function WeatherWidget() {
  const script = document.createElement("script");
  script.src = "https://weatherwidget.io/js/widget.min.js";
  script.async = true;
  //For head
  document.head.appendChild(script);
  return (
    <div className="weather">
      <a
        rel="noreferrer"
        className="link-underline link-underline-opacity-0  weatherwidget-io"
        href="https://forecast7.com/en/34d7732d43/paphos/"
        data-label_1="Paphos"
        data-label_2="Cyprus"
        data-font="Open Sans"
        data-mode="Current"
        data-days="3"
        data-theme="pure"
        data-basecolor="rgba(255, 255, 255, 0)"
      >
        Paphos Cyprus
      </a>
    </div>
  );
}
