import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Legend,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Sector,
  Label,
  LabelList
} from "recharts";

const TaskPieChart = ({ completedTask, totalTasks }) => {  
  const data = [
    {
      name1: "Completed Task",
      value: completedTask,
      color: "#5285ec"
    },
    { name: "", value: totalTasks - completedTask, color: "#ebe8e8fa" }
  ];

  const renderActiveShape = props => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
      index
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 5) * cos;
    const sy = cy + (outerRadius + 5) * sin;
    const mx = cx + (outerRadius + 10) * cos;
    const my = cy + (outerRadius + 10) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const RADIAN2 = Math.PI / 180;
    // eslint-disable-next-line
    const radius = 25 + innerRadius + (outerRadius - innerRadius);
    // eslint-disable-next-line
    const x = cx + radius * Math.cos(-midAngle * RADIAN2);
    // eslint-disable-next-line
    const y = cy + radius * Math.sin(-midAngle * RADIAN2);
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />

        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#5285ec"
          fontSize="10"
          fontFamily="sans-serif"
        >{`Completed Task`}</text>
      </g>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={"100%"}>
      <PieChart width={150} height={150}>
        <Pie
          data={data}
          dataKey="value"
          cx={"50%"}
          cy={"50%"}
          outerRadius={50}
          fill="#8884d8"
          activeIndex={0}
          activeShape={renderActiveShape}
          //   label={({
          //     cx,
          //     cy,
          //     midAngle,
          //     innerRadius,
          //     outerRadius,
          //     value,
          //     index
          //   }) => {
          //     const RADIAN = Math.PI / 180;
          //     // eslint-disable-next-line
          //     const radius = 25 + innerRadius + (outerRadius - innerRadius);
          //     // eslint-disable-next-line
          //     const x = cx + radius * Math.cos(-midAngle * RADIAN);
          //     // eslint-disable-next-line
          //     const y = cy + radius * Math.sin(-midAngle * RADIAN);

          //     return (
          //       <>
          //         <text
          //           x={x}
          //           y={y + 6}
          //           fill="#5285ec"
          //           textAnchor={x > cx ? "start" : "end"}
          //           dominantBaseline="end"
          //         >
          //           {data[index].name1}
          //         </text>
          //         <text
          //           x={x}
          //           y={y + 24}
          //           fill="#5285ec"
          //           textAnchor={x > cx ? "start" : "end"}
          //           dominantBaseline="end"
          //         >
          //           {data[index].name2}
          //         </text>
          //       </>
          //     );
          //   }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={data[index].color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default TaskPieChart;
