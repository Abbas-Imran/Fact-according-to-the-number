document.getElementById("submit").addEventListener("click", async function () {
  const num = document.getElementsByClassName("number")[0].value;
  if(num == 0) {
    document.getElementsByClassName("output")[0].innerHTML = "Enter a number first";
  }
  else {
  const link = `http://numbersapi.com/${num}`;
  try {
    let fetchRes = await fetch(link);
    const data = await fetchRes.text();
    document.getElementsByClassName("output")[0].innerHTML = data;
  } catch (err) {
    console.error(err);
  }
}
});
