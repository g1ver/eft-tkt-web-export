"use client";
import { DiscordGuild } from "@/types/next-auth";
import { useState } from "react";
import data from "@/app/data/tarkov_data.json";
import { ChevronDown, ChevronUp, Download } from "lucide-react";

interface ServerItemProps {
  guild: DiscordGuild;
}

interface KillData {
  kill_id: string;
  killer_id: number;
  killed_id: number;
  tag: string;
  kill_time: string;
}

export default function ServerItem({ guild }: ServerItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const killData = data[guild.id as keyof typeof data] as KillData[] | undefined;

  const downloadCSV = () => {
    if (!killData) return;

    // Create CSV content
    const headers = ["killer_id", "killed_id", "kill_time", "tag"];
    const csvContent = [
      headers.join(","),
      ...killData.map(kill => [
        kill.killer_id,
        kill.killed_id,
        kill.kill_time,
        `"${kill.tag.replace(/"/g, '""')}"` // Escape quotes in tags
      ].join(","))
    ].join("\n");

    // Create and trigger download
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${guild.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_kills.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <li className="p-3 bg-gray-800 rounded">
      <div className="flex justify-between items-center">
        <span>{guild.name}</span>
        <div className="flex gap-2">
          {killData && (
            <button
              onClick={downloadCSV}
              className="p-1 hover:bg-gray-700 rounded"
              title="Download CSV"
            >
              <Download size={20} />
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 hover:bg-gray-700 rounded"
          >
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </div>
      
      {isOpen && killData && (
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-gray-700">
                <th className="pb-2">Killer ID</th>
                <th className="pb-2">Killed ID</th>
                <th className="pb-2">Time</th>
                <th className="pb-2">Tag</th>
              </tr>
            </thead>
            <tbody>
              {killData.map((kill) => (
                <tr key={kill.kill_id} className="border-b border-gray-700">
                  <td className="py-2">{kill.killer_id}</td>
                  <td className="py-2">{kill.killed_id}</td>
                  <td className="py-2">{new Date(kill.kill_time).toLocaleString()}</td>
                  <td className="py-2">{kill.tag}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isOpen && !killData && (
        <p className="mt-3 text-gray-400">No kill data available for this server</p>
      )}
    </li>
  );
}