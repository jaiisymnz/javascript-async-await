//Exercise #2
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};

// Start coding here
function getData(data) {
  console.log(data);
}

function getDataFail(error) {
  console.log(error);
}
getJohnProfile().then(getData).catch(getDataFail);
