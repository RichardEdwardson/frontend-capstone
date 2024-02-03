import { render, screen, waitFor } from '@testing-library/react';
import BookingForm from './BookingForm';
import userEvent from '@testing-library/user-event';

describe("Booking Component", () => {
    test("renders correctly", () => {
        render(<BookingForm dateAvailable={[]} timeAvailable={[]}/>)
        expect(screen.getByText("Date")).toBeInTheDocument()
    })

    test("validates", async () => {
        render(<BookingForm dateAvailable={[]} timeAvailable={[]}/>)
        userEvent.click(screen.getByText("Submit"))
        await waitFor(() => {
            expect(screen.getAllByText('Required')[0]).toBeInTheDocument()

        })
        

    })
})