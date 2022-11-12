export default function LoadingSVG() {
  return (
    <div>
      <svg
        style={
          {
            margin: 'auto',
            background: 'none',
            display: 'block',
            shapeRendering: 'auto'
          }
        }
        width="503px"
        height="503px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx={84}
          cy={50}
          r={10}
          fill="#e15b64"
        >
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="0.3846153846153846s"
            calcMode="spline"
            keyTimes="0;1"
            values="10;0"
            keySplines="0 0.5 0.5 1"
            begin="0s"
          />
          <animate
            attributeName="fill"
            repeatCount="indefinite"
            dur="1.5384615384615383s"
            calcMode="discrete"
            keyTimes="0;0.25;0.5;0.75;1"
            values="#e15b64;#abbd81;#f8b26a;#f47e60;#e15b64"
            begin="0s"
          />
        </circle>
        <circle
          cx={16}
          cy={50}
          r={10}
          fill="#e15b64"
        >
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.5384615384615383s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="0s"
          />
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.5384615384615383s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="0s"
          />
        </circle>
        <circle
          cx={50}
          cy={50}
          r={10}
          fill="#f47e60"
        >
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.5384615384615383s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.3846153846153846s"
          />
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.5384615384615383s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.3846153846153846s"
          />
        </circle>
        <circle
          cx={84}
          cy={50}
          r={10}
          fill="#f8b26a"
        >
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.5384615384615383s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.7692307692307692s"
          />
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.5384615384615383s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.7692307692307692s"
          />
        </circle>
        <circle
          cx={16}
          cy={50}
          r={10}
          fill="#abbd81"
        >
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.5384615384615383s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-1.1538461538461537s"
          />
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.5384615384615383s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-1.1538461538461537s"
          />
        </circle>
      </svg>
    </div>

  )
}