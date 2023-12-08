import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  users =["test", "test1"]
  getUsers(): number {
    return this.users.length;
  }
  getPersonalizedGreeting(name: string): string {
    return `Hello, ${name}! Welcome to Nest.js!`;
  }

  getFakeUsers(): any[] {
    // Generate some fake user data
    const fakeUsers = [];
    for (let i = 1; i <= 5; i++) {
      fakeUsers.push({
        id: i,
        username: `user${i}`,
        email: `user${i}@example.com`,
      });
    }
    return fakeUsers;
  }
  private animals = [
    { id: 1, name: 'Dog', type: 'Mammal' },
    { id: 2, name: 'Cat', type: 'Mammal' },
    { id: 3, name: 'Parrot', type: 'Bird' },
    // Add more dummy data as needed
  ];

  getAvailableAnimals(): { id: number; name: string; type: string }[] {
    return this.animals;
  }
}
