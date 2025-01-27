import { Card } from "../../ui/Card";
import { CardContent } from "../../ui/CardContent";

export const BookingDetails: React.FC = () => {
  return (
    <Card className="md:w-1/2">
      <CardContent>
        <img
          src="https://res.cloudinary.com/dbrub0d6r/image/upload/v1737915759/hotel4_bbiqv0.png"
          alt="Hotel"
          className="w-full h-50 rounded-lg object-cover mb-4"
        />
        <h3 className="text-lg font-bold">Cashville</h3>
        <p className="text-gray-600">Kemang, Indonesia</p>
        <p className="text-blue-700 mt-2 font-semibold">$480 USD for 2 night</p>
      </CardContent>
    </Card>
  );
};
