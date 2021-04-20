import React, {useState, useEffect, useRef} from "react";

let autoComplete;

const PlacesSearchInput = props => {
  
  const [query, setQuery] = useState('');
  const autoCompleteRef = useRef(null);
  
  const handleOnChange = e => {
    setQuery(e.target.value)
  }
  
  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_PLACES_API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef, props.onSelect)
    );
  }, [])
  
  return (
  <div className="places-search-input">
    <input className="ant-input" 
    name="address"
    ref={autoCompleteRef}
    onChange={handleOnChange}
    placeholder="ex. 1400 Rodeo Dr, Beverly Hills, CA"
    value={query}
    />
  </div>
  )
}

export default PlacesSearchInput;



// Dynamically Load Script and 
// Initialize Google's Places Auto-Complete:
// -----------------------------------------
const loadScript = (url, callback) => {
  let script = document.createElement("script"); // create script tag
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }
  script.src = url; 
  document.getElementsByTagName("head")[0].appendChild(script);
};




async function handlePlaceSelect(updateQuery, onSelect) {
  const addressObject = autoComplete.getPlace(); 
  const query = addressObject.formatted_address;
  updateQuery(query); // Update the value of the input to match the selection.
  const formatted = formattedAddress(addressObject)
  console.log('FORMATTED ADDRESS', formatted)
  onSelect(formattedAddress(addressObject)); // Update the selected address object.
}


// Formats Google Places address to a DB-ready JS object.
function formattedAddress(addressObject) {
  let number;
  let street;
  let address = {};
  const {address_components} = addressObject;
  
  for (var key in address_components) {
    const component = address_components[key]
    switch(component.types[0]) {
      default: 
        continue
      case 'locality':
        address.city = component.long_name
        continue
      case 'street_number':
        number = component.long_name
        continue
      case 'administrative_area_level_1':
        address.state = component.long_name
        continue
      case 'country':
        address.country = component.short_name
        continue
      case 'route':
        street = component.long_name
        continue
      case 'postal_code':
        address.postalCode = component.long_name
        continue
    }
  }
  return {...address, street: `${number} ${street}`}
}



function handleScriptLoad(updateQuery, autoCompleteRef, onSelect) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { types: ["address"], componentRestrictions: { country: "us" } }
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery, onSelect)
  );
}


