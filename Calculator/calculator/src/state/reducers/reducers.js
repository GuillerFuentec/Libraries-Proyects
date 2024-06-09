const sumar = (state = false, action) => {
  switch (action.type) {
    case "SUMAR":
      return { state: state + action.payload };
    default:
      return state;
  }
};

const restar = (state = false, action) => {
  switch (action.type) {
    case "RESTAR":
      return { state: state - action.payload };
    default:
      return state;
  }
};

const dividir = (state = false, action) => {
  switch (action.type) {
    case "DIVIDIR":
      return { state: state / action.payload };
    default:
      return state;
  }
};

const multiplicar = (state = false, action) => {
  switch (action.type) {
    case "MULTIPLICAR":
      return { state: state * action.payload };
    default:
      return state;
  }
};

export const reducer = {
  sumar: sumar,
  restar: restar,
  dividir: dividir,
  multiplicar: multiplicar,
};
