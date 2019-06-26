import React from "react";
//1.1 Is Unique
//Determine if a string has all unique characters. What if you cannot use additional data structures.
//create hash map 'const charMap = {}'
//split the string
//arr.map(x => x)
//if !charMap[x]
//  charMap[x] = 1
// else
// return false
//return true

function isUnique(str) {
  let charMap = {};
  let arr = str
    .split("")
    .map(x => {
      if (charMap[x] === 1) {
        return false;
      } else {
        charMap[x] = 1;
      }
      return true;
    })
    .join();
  return arr.includes("false") ? false : true;
}
function assertEqual(x, y) {
  return x === y;
}

//1.2 Check Permutation
function splitSortJoin(str) {
  return str
    .split("")
    .sort()
    .join("");
}
function permutation(str1, str2) {
  return splitSortJoin(str1) === splitSortJoin(str2)
    ? `${str1} is a palidrome of ${str2}`
    : `${str1} is not a palidrome of ${str2}`;
}

// hi is a palidrome of ih
// h1i is not a palidrome of ih$
// h1i is not a palidrome of ih$

// 1.3 URLIFY
function splitMapJoin(x) {
  return x
    .split("")
    .map(x => (x === " " ? (x = "%20") : x))
    .join("");
}
function URLify(str) {
  return "/" + splitMapJoin(str);
}

///str%20go

// 1.4 Palindrome Permutation
function palidromePermuation(str1, str2) {
  let res = str2.split("");
  return str1 === res.reverse().join("")
    ? `${str1} is a plaindrome of ${str2}`
    : `${str1} is NOT a plaindrome of ${str2}`;
}

function splitFilter(x) {
  return x
    .split("")
    .filter(x => x !== " ")
    .sort()
    .join("");
}
function palidromePermuation2(str1, str2) {
  return splitFilter(str1) === splitFilter(str2)
    ? `${str1} is a plaindrome of ${str2}`
    : `${str1} is NOT a plaindrome of ${str2}`;
}

// !dog is a plaindrome of g o d!

// god is a plaindrome of dog
// god is NOT a plaindrome of dogs

// 1.5 One Away
function oneAway(str1, str2) {
  let s1 = str1.split("");
  let s2 = str2.split("");
  console.log(s1, s2);

  function insert(char) {}
  function remove(char) {}
  function replace(char) {}
}
let x = oneAway("pale", "ple");

export const Chapter1 = (
  <div>
    <div>
      {(assertEqual(isUnique("ssss"), false),
      isUnique("s") === true).toString()}
    </div>
    <div>
      {(isUnique("142fc2ccc2") === true,
      isUnique("s1c2t#$!") === true).toString()}
    </div>
    <div>
      1.1 {(isUnique("ssss") === false, isUnique("s") === false).toString()}
    </div>
    <div>1.2 {permutation("hi", "ih")}</div>
    <div>1.2 {permutation("h1i", "ih$")}</div>
    <div>1.2 {permutation("h1i", "ih$")}</div>
    <div>1.3 {URLify("str go")}</div>
    <div>1.4 {palidromePermuation("god", "dog")}</div>
    <div>1.4 {palidromePermuation("god", "dogs")}</div>
    <div>1.4 {palidromePermuation2("!dog", "g o d   !")}</div>
    <div>1.4 {palidromePermuation2("taco cat", "atco cta")}</div>
    <div>1.4 {palidromePermuation2("thang", "thing")}</div>
    <div>{}</div>
    <div>{}</div>
    <div>{}</div>
    <div>{}</div>
    <div>{}</div>
    <div>{}</div>
    <div>{}</div>
    <div>{}</div>
    <div>{}</div>
    <div>{}</div>
  </div>
);
