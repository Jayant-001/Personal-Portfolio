export interface CodingProfile {
  platform: string;
  handle: string;
  rank: string;
  problemsSolved: number;
  profileUrl: string;
}

export const profiles: CodingProfile[] = [
  {
    platform: "LeetCode",
    handle: "jayant2k1",
    rank: "Knight | Top 2.5%",
    problemsSolved: 1600,
    profileUrl: "https://leetcode.com/u/jayant2k1"
  },
  {
    platform: "CodeForces",
    handle: "jayant001",
    rank: "1423 | Specialist",
    problemsSolved: 1000,
    profileUrl: "https://codeforces.com/profile/jayant001"
  },
  // {
  //   platform: "HackerRank",
  //   handle: "backend_dev",
  //   rank: "5 Star",
  //   problemsSolved: 200,
  //   profileUrl: "https://hackerrank.com/backend_dev"
  // },
];