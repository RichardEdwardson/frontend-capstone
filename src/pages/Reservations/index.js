import BookingForm from "./BookingForm";

const dateAvailable = [
    'Feb 02, 2024',
    'Feb 03, 2024',
    'Feb 04, 2024',
]

const timeAvailable = [
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
]

export default function Reservations() {
    return (
        <>
            <BookingForm dateAvailable={dateAvailable} timeAvailable={timeAvailable}/>
        </>
    )
}