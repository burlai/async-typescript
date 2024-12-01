export const dataRequestWithCallback = () => {
  const dataUrl = "https://dummyjson.com/products";

  const httpRequest = new XMLHttpRequest(); // special object from JS/TS - available in vanilla JS/TS & every framework

  type SuccessCallback = {
    (data: string): void;
  };

  type ErrorCallback = {
    (status: number): void;
  };

  const getProducts = (
    url: string,
    successCallback: SuccessCallback,
    errorCallback: ErrorCallback
  ): void => {
    httpRequest.open("GET", url); // create a new request
    httpRequest.send(); // send the request

    httpRequest.onload = () => {
      if (httpRequest.status === 200) {
        successCallback(httpRequest.responseText); // call the success callback
      } else {
        errorCallback(httpRequest.status); // call the error callback
      }
    };
  };

  const successHandler = (data: string) => {
    console.log(JSON.parse(data));

    const products = JSON.parse(data).products;
    const requestResult = document.getElementById("requestResult");

    if (requestResult) {
      const ul = document.createElement("ul");

      products.map(
        (product: { title: string; price: number; category: string }) => {
          const li = document.createElement("li");
          li.innerHTML = `<div style="margin-bottom: 12px"><b>${product.title}</b> <br> Price: ${product.price}, <br> Category: ${product.category}</div>`;
          ul.appendChild(li);
        }
      );

      requestResult.appendChild(ul);
    }
  };

  const errorHandler = (status: number) => {
    console.log(`We've got an error with status: ${status}`);

    const requestResult = document.getElementById("requestResult");

    if (requestResult) {
      requestResult.textContent = `We've got an error with status: ${status}`;
    }
  };

  getProducts(dataUrl, successHandler, errorHandler);
};
