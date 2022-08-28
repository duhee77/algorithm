function solution(id_list, report, k) {
  let answer = [];

  const reportList = id_list.map((id) => createReportList(id));
  const reportedList = id_list.map((id) => createReportedList(id));

  report.map((element) => {
    const userList = element.split(" ");
    if (userList[0] !== userList[1]) {
      const report = reportList.find((report) => report.name === userList[0]);
      if (!report.report.has(userList[1])) {
        report.report.add(userList[1]);
        const reported = reportedList.find(
          (reported) => reported.name === userList[1]
        );
        reported.count++;
      }
    }
  });

  const blockedList = reportedList.filter((reported) => reported.count >= k);

  reportList.map((report) => {
    let count = 0;
    const angryList = Array.from(report.report);
    angryList.map((angry) => {
      if (blockedList.find((blocked) => blocked.name === angry)) {
        count++;
      }
    });
    answer.push(count);
  });
  return answer;
}

function createReportList(id) {
  const report = { name: id, report: new Set() };
  return report;
}

function createReportedList(id) {
  const reported = { name: id, count: 0 };
  return reported;
}
