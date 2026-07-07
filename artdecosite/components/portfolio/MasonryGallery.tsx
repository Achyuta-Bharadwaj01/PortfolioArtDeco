"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";

type MasonryGalleryProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  getKey: (item: T, index: number) => string;
};

type ColumnEntry<T> = {
  item: T;
  index: number;
};

function getColumnCount(width: number) {
  if (width >= 1280) return 3;
  if (width >= 640) return 2;
  return 1;
}

function distributeItems<T>(items: T[], columnCount: number) {
  const columns = Array.from(
    { length: columnCount },
    () => [] as ColumnEntry<T>[],
  );

  items.forEach((item, index) => {
    columns[index % columnCount].push({ item, index });
  });

  return columns;
}

export function MasonryGallery<T>({
  items,
  renderItem,
  getKey,
}: MasonryGalleryProps<T>) {
  const [columnCount, setColumnCount] = useState(1);

  useEffect(() => {
    const updateColumns = () => {
      setColumnCount(getColumnCount(window.innerWidth));
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const columns = useMemo(
    () => distributeItems(items, columnCount),
    [items, columnCount],
  );

  return (
    <div
      className="grid w-full gap-5 sm:gap-6 lg:gap-8"
      style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}
    >
      {columns.map((columnItems, columnIndex) => (
        <div
          key={`masonry-column-${columnIndex}`}
          className="flex min-w-0 flex-col gap-5 sm:gap-6 lg:gap-8"
        >
          {columnItems.map(({ item, index }) => (
            <div key={getKey(item, index)} className="w-full min-w-0">
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
