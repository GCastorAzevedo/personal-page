import { Group } from "@visx/group"
import ParentSize from "@visx/responsive/lib/components/ParentSizeModern"


export default function Example() {
  return (
    <div>
      <svg>
        <circle key={`hey!`} r={50} cx={0} cy={0} fill="#673ab7" />
      </svg>
    </div>
  )
}


// 

/* import Pie from "@visx/shape/lib/shapes/Pie";
import { scaleOrdinal } from "@visx/scale";
import { Group } from "@visx/group";
import ParentSize from "@visx/responsive/lib/components/ParentSize";

// https://github.com/airbnb/visx/issues/1653
// https://github.com/vitest-dev/vitest/issues/2742

export default function Programming({ data }) {
  return (
    <div
      style={{
        maxWidth: "500px",
        height: "300px",
        padding: "4px",
        margin: "16px 10px 16px 10px",
        boxSizing: "border-box",
      }}
    >
      <ParentSize>
        {({ width, height }) => (
          <ProgrammingDonutChart
            width={width}
            height={height}
            data={data}
            margin={{
              top: 20,
              right: 14,
              bottom: 20,
              left: 14,
            }}
          />
        )}
      </ParentSize>
    </div>
  );
}

const defaultMargin = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20,
};

function ProgrammingDonutChart({
  data,
  width,
  height,
  margin = defaultMargin,
}) {
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const radius = Math.min(innerWidth, innerHeight) / 2;
  const centerX = innerWidth / 2;
  const centerY = innerHeight / 2;
  const donutThickness = Math.min(90, radius);
  const getColor = scaleOrdinal({
    domain: data.items.map((d) => d.letter),
    range: data.colorRange,
  });

  const getValue = (letter) =>
    data.items.find((d) => d.letter === letter).value;

  return (
    <svg width={width} height={height}>
      <Group top={centerY + margin.top} left={centerX + margin.left}>
        <Pie
          data={data.items.map((d) => d.letter)}
          pieValue={getValue}
          outerRadius={radius}
          innerRadius={radius - donutThickness}
          cornerRadius={2}
          podAngle={0.005}
        >
          {(pie) => {
            return pie.arcs.map((arc, index) => {
              const letter = arc.data;
              const [centroidX, centroidY] = pie.path.centroid(arc);
              const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1;
              const arcPath = pie.path(arc);
              const arcFill = getColor(letter);
              return (
                <g key={`arc-${index}`}>
                  <path d={arcPath} fill={arcFill} />
                  {hasSpaceForLabel && (
                    <text
                      x={centroidX}
                      y={centroidY}
                      dy=".33em"
                      fill="#ffffff"
                      fontSize={22}
                      textAnchor="middle"
                      pointerEvents="none"
                    >
                      {arc.data}
                    </text>
                  )}
                </g>
              );
            });
          }}
        </Pie>
      </Group>
    </svg>
  );
}
 */

// 