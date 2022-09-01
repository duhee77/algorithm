/**
 * @author 이정우
 * @param {string} new_id 신규 아이디
 * @returns
 */
function solution(new_id) {
  const answer = new Recommend(new_id)
    .toLowerCase()
    .replaceForbiddenChar()
    .replaceMultipleDots()
    .replaceStartDot()
    .replaceEndDot()
    .checkNullEndInsert()
    .checkMaximumLengthAndCompress()
    .checkMinimumLengthAndExpand()
    .getRecommendId();
  return answer;
}

class Recommend {
  constructor(id) {
    this.id = id;
  }

  // 1단계: new_id 의 모든 대문자를 대응되는 소문자로 치환
  toLowerCase() {
    this.id = this.id.toLowerCase();
    return this;
  }

  // 2단계: 소문자, 숫자, (-), (_), (.) 를 제외한 모든 문자를 제거
  replaceForbiddenChar() {
    const regForbiddenChar = /[~!@#$%^&*\(\)\=+\[\{\]\}:?,<>\/]/gi;
    this.id = this.id.replace(regForbiddenChar, "");
    return this;
  }

  // 3단계: (.) 가 중복된 경우, 제거
  replaceMultipleDots() {
    const regDotChar = /\.+/gi;
    this.id = this.id.replace(regDotChar, ".");
    return this;
  }

  // 4단계: (.) 가 처음에 오는 경우, 제거
  replaceStartDot() {
    if (this.id.length === 0) {
      return this;
    }
    if (this.id[0] === ".") {
      this.id = this.id.slice(1);
    }
    return this;
  }

  // 4단계: (.) 가 끝에 오는 경우, 제거
  replaceEndDot() {
    if (this.id.length === 0) {
      return this;
    }
    if (this.id[this.id.length - 1] === ".") {
      this.id = this.id.slice(0, this.id.length - 1);
    }
    return this;
  }

  // 5단계: 빈 문자열이라면, new_id 에 "a"를 대입
  checkNullEndInsert() {
    if (this.id.length === 0) {
      this.id = this.id + "a";
    }
    return this;
  }

  // 6단계: 길이가 16자 이상이라면, 15자로 축소. 마지막 문자열이 (.) 라면, 제거
  checkMaximumLengthAndCompress() {
    if (this.id.length >= 16) {
      this.id = this.id.slice(0, 15);
    }
    this.replaceEndDot();
    return this;
  }

  // 7단계: 길이가 2자 이하라면, 마지막 문자를 길이가 3이 될때까지 추가
  checkMinimumLengthAndExpand() {
    while (this.id.length <= 2) {
      this.id = this.id + this.id[this.id.length - 1];
    }
    return this;
  }

  getRecommendId() {
    return this.id;
  }
}

// console.log(
//   solution("...!@BaT#*..y.abcdefghijklm"),
//   solution("z-+.^."),
//   solution("=.="),
//   solution("123_.def"),
//   solution("abcdefghijklmn.p")
// );
