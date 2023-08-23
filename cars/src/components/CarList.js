import {useDispatch, useSelector} from "react-redux";
import {removeCar} from "../store";

function CarList() {
    const dispatch = useDispatch();
    const {carList, carToAdd} = useSelector(({carCreation, cars: {list, searchTerm}}) => {
        const filteredCars = list.filter((car) =>
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return {
            carList: filteredCars,
            carToAdd: carCreation.name,
        };
    });
    const handleDeleteCare = (car) => {
        dispatch(removeCar(car.id));
    };

    const renderedCars = carList.map((car) => {
        const isBold = carToAdd && car.name.toLowerCase().includes(carToAdd.toLowerCase());

        return (
            <div className={`panel ${isBold && 'bold'}`} key={car.id}>
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button className="button is-danger" onClick={() => handleDeleteCare(car)}>
                    Delete
                </button>
            </div>
        );
    });

    return (
        <div className="car-list">
            {renderedCars}
            <hr />
        </div>
    );
}

export default CarList;
