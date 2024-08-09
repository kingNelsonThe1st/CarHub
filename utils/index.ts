import { FilterProps } from "@/props";

{/* FROM RAPID API; DATA ON ALL CAR MAKES AND MODEL
const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e26c1ceb4emsh86ab8e637d19400p1f7d92jsn2b72d3498705',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
} */}

export async function fetchCars(filters: FilterProps) {
  const {manufacturer, year, model, limit, fuel} = filters;

  const headers = {
      'X-RapidAPI-Key': 'e26c1ceb4emsh86ab8e637d19400p1f7d92jsn2b72d3498705',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch (`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {headers: headers,});

  const result = await response.json();

  return result
}

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value)

  const newPathname =`${window.location.pathname}? ${searchParams.toString()}`

  return newPathname;
}