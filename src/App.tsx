// Avoid deeply nested state:

import { useState } from "react"
import { initialTravelPlan, Place, TravelPlanType } from "./components/places"

export default function TravelPlan() {
    const [plan, setPlan] = useState<TravelPlanType>( initialTravelPlan );
    const rootPlace: Place = plan[0];
    const planetsIds: Place["childIds"] = rootPlace.childIds;

    function handleCompleteClick(parentId: Place["id"], childId: Place["id"]): void {
        const visitedPlace_Parent: Place = plan[parentId];

        const visitedPlace_Parent_ExcudedChildId: Place = {
            ...visitedPlace_Parent,
            childIds: visitedPlace_Parent.childIds.filter((id) => id !== childId)
        }

        console.log(visitedPlace_Parent);
        console.log(visitedPlace_Parent_ExcudedChildId);

        const nextPlan: TravelPlanType = {
            ...plan,
            [visitedPlace_Parent_ExcudedChildId.id]: visitedPlace_Parent_ExcudedChildId
        }

        setPlan(nextPlan);
    }


    return (
        <>
            <h2>Places To visit</h2>
            <ol>
                {planetsIds.map((planetId) => (
                    <PlaceTree
                        key={planetId}
                        plan={plan}
                        placeId={planetId}
                        parentId={0}
                        onComplete={handleCompleteClick}
                    />
                ))}
            </ol>
        </>
    )
};

function PlaceTree({plan, placeId, parentId, onComplete}: {
    plan: TravelPlanType,
    placeId: Place["id"], // id of the place returned from the previous (the parent)
    parentId: Place["id"], // id of the parent bearing the child 
    onComplete: (parentId: Place["id"], childId: Place["id"]) => void
}) {
    const place: Place = plan[placeId];
    const childPlacesIds: Place["childIds"] = place.childIds;
    return (
        <li>
            {place.title}
            {" "}
            <button onClick={() => {
                onComplete(parentId, placeId)
            }}>Complete</button>
            {childPlacesIds.length > 0 &&
                <ol>
                    {childPlacesIds.map((childPlaceId) => (
                        <PlaceTree
                            key={childPlaceId}
                            plan={plan}
                            placeId={childPlaceId} // the current place
                            parentId={placeId} // of the parrent bearing this current place
                            onComplete={onComplete}
                        />
                    ))}
                </ol>            
            }
        </li>
    )
};