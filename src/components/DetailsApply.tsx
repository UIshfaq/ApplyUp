import { useParams } from "react-router-dom";
import { useAppliances } from "../contexts/AppliancesContext.tsx";

export const DetailsAppliances = () => {
    const { id } = useParams();
    const { appliances } = useAppliances();

    // On cherche l'appliance qui correspond à l'ID
    const appliance = appliances.find(a => a.id === id);

    // Si on ne trouve rien (ex: ID inexistant ou page rafraîchie sans storage)
    if (!appliance) return (
        <div className="p-4">
            <p className="text-red-500 font-bold">Candidature introuvable</p>
        </div>
    );

    return (
        <div className="border p-6 m-4 rounded-lg shadow-sm bg-white">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">{appliance.name}</h2>

            <div className="flex flex-col gap-3">
                <div className="mt-4 p-4 bg-gray-50 rounded border">
                    <strong className="block mb-2 text-gray-700">Description / Motivation :</strong>
                    <p className="whitespace-pre-wrap text-gray-600">
                        {appliance.description || "Aucune description fournie."}
                    </p>
                </div>
            </div>
        </div>
    );
}