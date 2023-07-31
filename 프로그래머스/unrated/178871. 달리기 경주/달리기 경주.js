const solution = (players, callings) => {
  let playerMap = new Map();
  let rankMap = new Map();
  let newRank, preName;
  players.map((player, ranking) => playerMap.set(player, ranking + 1)); // { 이름, 순위 }
  players.map((player, ranking) => rankMap.set(ranking + 1, player)); // { 순위, 이름 }

  callings.map((call) => {
    // 새로운 순위
    newRank = playerMap.get(call) - 1;
    // 원래 그 순위에 있던 이름
    preName = rankMap.get(newRank);
    // 바뀐 순위에 이름 할당
    rankMap.set(newRank, call);
    rankMap.set(newRank + 1, preName);

    // 바뀐 이름에 순위 할당
    playerMap.set(call, newRank);
    playerMap.set(preName, newRank + 1);
  });
  return Array.from(rankMap.values());
};

