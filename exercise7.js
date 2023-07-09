function getAddressCity(address) {
  return address?.city ?? "Unknown";
}

const address1 = {
  street: "123 Main Street",
  city: "New York",
  country: "USA"
};

const address2 = {
  street: "456 Elm Street",
  country: "Canada"
};

console.log(getAddressCity(address1)); // Output: "New York"
console.log(getAddressCity(address2)); // Output: "Unknown"
