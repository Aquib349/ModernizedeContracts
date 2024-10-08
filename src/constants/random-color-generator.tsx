const customColor = [
  "bg-red-100",
  "bg-green-100",
  "bg-blue-100",
  "bg-rose-100",
  "bg-orange-100",
  "bg-cyan-100",
  "bg-emerald-100",
];

export function RandomColor() {
  if (customColor && customColor.length > 0) {
    const randomIndex = Math.floor(Math.random() * customColor.length);
    return customColor[randomIndex];
  }
}
