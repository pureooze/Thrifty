import { Transaction } from '../types/transaction.js';
import { Category } from '../types/category.js';

const mockTransactions = [
	new Transaction("Grocery Shopping", new Date(2023, 0, 5), 75, Category.Groceries),
	new Transaction("Monthly Rent", new Date(2023, 0, 1), 1200, Category.Rent),
	new Transaction("Electricity Bill", new Date(2023, 0, 10), 200, Category.Utilities),
	new Transaction("Metro Pass", new Date(2023, 0, 12), 90, Category.Transportation),
	new Transaction("Movie Night with Friends", new Date(2023, 0, 15), 50, Category.Entertainment),
	new Transaction("Dinner at Italian Restaurant", new Date(2023, 0, 20), 70, Category.DiningOut),
	new Transaction("Winter Jacket", new Date(2023, 0, 25), 120, Category.Clothing),
	new Transaction("Gym Membership", new Date(2023, 1, 1), 50, Category.Wellness),
	new Transaction("Donation to Charity", new Date(2023, 1, 5), 150, Category.Other),
	new Transaction("Supermarket Run", new Date(2023, 1, 10), 85, Category.Groceries),
	new Transaction("Rent Payment", new Date(2023, 1, 15), 1200, Category.Rent),
	new Transaction("Water Bill", new Date(2023, 1, 18), 40, Category.Utilities),
	new Transaction("Bus Tickets", new Date(2023, 1, 20), 30, Category.Transportation),
	new Transaction("Concert Tickets", new Date(2023, 1, 25), 150, Category.Entertainment),
	new Transaction("Dinner Date", new Date(2023, 2, 2), 90, Category.DiningOut),
	new Transaction("Sneakers Purchase", new Date(2023, 2, 5), 100, Category.Clothing),
	new Transaction("Yoga Class", new Date(2023, 2, 10), 25, Category.Wellness),
	new Transaction("Pet Supplies Donation", new Date(2023, 2, 15), 45, Category.Other),
	new Transaction("Organic Vegetables", new Date(2023, 2, 20), 30, Category.Groceries),
	new Transaction("Monthly Rent", new Date(2023, 2, 28), 1200, Category.Rent),
	new Transaction("Internet Bill", new Date(2023, 3, 1), 60, Category.Utilities),
	new Transaction("Taxi Fare", new Date(2023, 3, 3), 20, Category.Transportation),
	new Transaction("Sports Event Tickets", new Date(2023, 3, 10), 200, Category.Entertainment),
	new Transaction("Lunch Outing", new Date(2023, 3, 12), 40, Category.DiningOut),
	new Transaction("Spring Clothes Shopping", new Date(2023, 3, 15), 250, Category.Clothing),
	new Transaction("Wellness Retreat", new Date(2023, 3, 20), 500, Category.Wellness),
	new Transaction("Festival Contribution", new Date(2023, 3, 29), 100, Category.Other),
	new Transaction("Groceries for the Week", new Date(2023, 4, 2), 65, Category.Groceries),
	new Transaction("Monthly Rent", new Date(2023, 4, 5), 1200, Category.Rent),
	new Transaction("Gas Bill", new Date(2023, 4, 10), 50, Category.Utilities),
	new Transaction("Train Tickets", new Date(2023, 4, 12), 45, Category.Transportation),
	new Transaction("Netflix Subscription", new Date(2023, 4, 15), 10, Category.Entertainment),
	new Transaction("Dinner for Two", new Date(2023, 4, 20), 120, Category.DiningOut),
	new Transaction("Raincoat", new Date(2023, 4, 25), 80, Category.Clothing),
	new Transaction("Massage Therapy", new Date(2023, 4, 30), 55, Category.Wellness),
	new Transaction("Charity Walk Sponsorship", new Date(2023, 5, 5), 60, Category.Other),
	new Transaction("Weekend Groceries", new Date(2023, 5, 7), 50, Category.Groceries),
	new Transaction("Rent Payment", new Date(2023, 5, 10), 1200, Category.Rent),
	new Transaction("Electricity Payment", new Date(2023, 5, 15), 180, Category.Utilities),
	new Transaction("Flight Tickets", new Date(2023, 5, 20), 800, Category.Transportation),
	new Transaction("Virtual Reality Game", new Date(2023, 5, 22), 70, Category.Entertainment),
	new Transaction("Café Brunch", new Date(2023, 5, 25), 35, Category.DiningOut),
	new Transaction("Formal Outfit", new Date(2023, 5, 28), 300, Category.Clothing),
	new Transaction("Fitness Equipment", new Date(2023, 6, 1), 700, Category.Wellness),
	new Transaction("Animal Shelter Donation", new Date(2023, 6, 5), 90, Category.Other),
	new Transaction("Supermarket Visit", new Date(2023, 6, 7), 120, Category.Groceries),
	new Transaction("Monthly Apartment Rent", new Date(2023, 6, 15), 1200, Category.Rent),
	new Transaction("Air Conditioning Repair", new Date(2023, 6, 18), 300, Category.Utilities),
	new Transaction("Carpool Contribution", new Date(2023, 6, 20), 15, Category.Transportation),
];

class TransactionService {

	fetchTransactions() : Transaction[] {
		return mockTransactions;
	}

	fetchTransactionsByDateRange(
		startDate : Date = new Date(0),
		endDate : Date = new Date(0)

	) {
		return mockTransactions.filter(transaction => {
			return startDate <= transaction.date
				&& transaction.date <= endDate;
		});
	}
}

export default new TransactionService();
