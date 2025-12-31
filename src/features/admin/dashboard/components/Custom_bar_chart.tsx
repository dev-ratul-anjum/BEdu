import React, { useState, useEffect, useRef } from 'react';

const Custom_bar_chart = ({ data, totalCount, title, type }) => {
  if (!data) return <div className="h-80 bg-gray-50 rounded-2xl animate-pulse"></div>;
  const height = 200;
  const maxVal = Math.max(...data.map((d) => Math.max(d.present, d.absent))) * 1.2 || 100;

  // Calculate totals for the displayed period
  // Showing the Overall Total for the week as requested, distinct from the daily labels
  const totalPresent = data.reduce((acc, curr) => acc + curr.present, 0);
  const totalAbsent = data.reduce((acc, curr) => acc + curr.absent, 0);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      {/* Header with Title and See All Button */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <p className="text-xs text-gray-500 mt-1">Last 7 Days History</p>
        </div>

        <button className="text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-full border border-blue-200 transition-colors">
          See All
        </button>
      </div>

      {/* Totals Section - Displayed above the chart */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-gray-400 uppercase">Total Present</span>
          <span className="text-xl font-bold text-blue-600">{totalPresent}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-gray-400 uppercase">Total Absent</span>
          <span className="text-xl font-bold text-red-500">{totalAbsent}</span>
        </div>
      </div>

      <div className="relative h-52 w-full">
        <div className="absolute inset-0 pointer-events-none z-10">
          {data.map((item, index) => {
            // Re-calculating exact positions to match SVG bars exactly
            // SVG Logic: xPos = index * gap + gap / 2 - barWidth; (barWidth=4%)
            // Blue Bar: start at xPos, width 3%. Center = xPos + 1.5%
            // Red Bar: start at xPos + 4%, width 3%. Center = xPos + 4 + 1.5% = xPos + 5.5%

            const barWidth = 4;
            const gap = 100 / data.length;
            const startX = index * gap + gap / 2 - barWidth;

            const blueCenter = startX + 1.5;
            const redCenter = startX + 5.5;

            const hP_percent = (item.present / maxVal) * 100;
            const hA_percent = (item.absent / maxVal) * 100;

            return (
              <React.Fragment key={`lbl-pair-${index}`}>
                {/* Present Label */}
                <div
                  className="absolute text-[8px] sm:text-[10px] font-bold text-blue-600 transform -translate-x-1/2"
                  style={{ left: `${blueCenter}%`, bottom: `calc(${hP_percent}% + 2px)` }}
                >
                  {item.present}
                </div>
                {/* Absent Label */}
                <div
                  className="absolute text-[8px] sm:text-[10px] font-bold text-red-500 transform -translate-x-1/2"
                  style={{ left: `${redCenter}%`, bottom: `calc(${hA_percent}% + 2px)` }}
                >
                  {item.absent}
                </div>
              </React.Fragment>
            );
          })}
        </div>

        <svg
          viewBox={`0 0 100 ${height}`}
          className="w-full h-full overflow-visible"
          preserveAspectRatio="none"
        >
          {/* Grid lines (Optional but nice for context) */}
          <line
            x1="0"
            y1="200"
            x2="100"
            y2="200"
            stroke="#f1f5f9"
            strokeWidth="1"
          />

          {/* Bars Group (Flipped) */}
          <g transform="scale(1, -1) translate(0, -200)">
            {data.map((item, index) => {
              const barWidth = 4;
              const gap = 100 / data.length;
              const xPos = index * gap + gap / 2 - barWidth;
              const hP = (item.present / maxVal) * height;
              const hA = (item.absent / maxVal) * height;
              return (
                <g key={`bar-${type}-${index}`}>
                  {/* Present Bar (Blue) */}
                  <rect
                    x={`${xPos}%`}
                    y="0"
                    width="3%"
                    height={hP}
                    fill="#3b82f6"
                    rx="2"
                  />
                  {/* Absent Bar (Red) */}
                  <rect
                    x={`${xPos + 4}%`}
                    y="0"
                    width="3%"
                    height={hA}
                    fill="#ef4444"
                    rx="2"
                  />
                </g>
              );
            })}
          </g>
        </svg>
        <div className="flex justify-between mt-2 text-[10px] font-bold text-gray-400">
          {data.map((d, i) => (
            <span
              key={`lbl-${type}-${i}`}
              className="flex-1 text-center"
            >
              {d.day}
            </span>
          ))}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-blue-500"></div>
            <span className="text-xs text-gray-500 font-medium">Present</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-red-500"></div>
            <span className="text-xs text-gray-500 font-medium">Absent</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom_bar_chart;
