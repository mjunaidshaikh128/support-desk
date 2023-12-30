import axios from 'axios'

const API_URL = '/api/tickets'

// Get Ticket

const getTickets =  async () => {
    const response = await axios.get(API_URL)
    if (response.data) {
        
    }
}

const ticketService = {
    getTickets
}

export default ticketService