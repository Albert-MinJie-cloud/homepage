export type AlgorithmItem = {
  name: string;
  summary: string;
  problem: string;
  code: string;
  note: string;
  link: string;
};

export const algorithms: AlgorithmItem[] = [
  {
    name: "两数之和",
    summary: "哈希表一次遍历解法。",
    problem: "给定整数数组 nums 和整数 target，返回两数下标。",
    code: "const map = new Map<number, number>();\nfor (let i = 0; i < nums.length; i++) {\n  const diff = target - nums[i];\n  if (map.has(diff)) return [map.get(diff)!, i];\n  map.set(nums[i], i);\n}",
    note: "用空间换时间，时间复杂度 O(n)。",
    link: "https://example.com/algorithm/two-sum",
  },
];
