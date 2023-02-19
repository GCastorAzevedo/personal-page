import { Group } from "@visx/group";
import { scaleOrdinal } from "@visx/scale";
import ParentSize from "@visx/responsive/lib/components/ParentSizeModern";

export default function SkillsChart({ data }) {
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
          <BubbleChart
            data={data}
            width={width}
            height={height}
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

export function BubbleChart({ data, width, height, margin = defaultMargin }) {
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const radius = Math.min(innerWidth, innerHeight) / 2.5;
  const centerX = innerWidth / 4;
  const centerY = innerHeight / 4;
  const getColor = scaleOrdinal({
    domain: data.items.map((d) => d.skill),
    range: data.colorRange,
  });
  const getRandomAngle = (n, k) => (2 * Math.PI * k) / n;
  const n = data.items.length;

  return (
    <div>
      <svg width={width} height={height}>
        <Group top={centerY + margin.top} left={centerX + margin.left}>
          {data.items.map((item, index) => {
            const angle = getRandomAngle(n, index);
            const cx = centerX + radius * Math.cos(angle) || item.cx;
            const cy = centerY + radius * Math.sin(angle) || item.cy;
            return (
              <Group key={index}>
                <circle
                  key={index}
                  r={item.radius}
                  cx={cx}
                  cy={cy}
                  fill={getColor(item.skill)}
                />
                {item.skill
                  .split("\n")
                  .map((t) => t.trim())
                  .map((t, index) => {
                    const dy = 15 * index;
                    return (
                      <text
                        x={cx}
                        y={cy + dy - item.radius / 4}
                        fill="#fff"
                        fontSize="13"
                        textAnchor="middle"
                        // dy={.5}
                        // dx={.5}
                        key={index}
                      >
                        {t}
                      </text>
                    );
                  })}
              </Group>
            );
          })}
          {/* <circle
            key={1}
            r={radius}
            cx={centerX}
            cy={centerY}
            fill="#673ab7"
          />
          <circle
            key={2}
            r={30}
            cx={25}
            cy={25}
            fill="#9c27b0"
          />
          <circle
            key={2}
            r={30}
            cx={10}
            cy={15}
            fill="#ff6699"
          /> */}
        </Group>
      </svg>
    </div>
  );

  /* return (
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
  ); */
}

//

/* function ProgrammingDonutChart({
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
