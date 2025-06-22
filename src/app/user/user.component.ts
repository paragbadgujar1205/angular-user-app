import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [FormsModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: User[] = [
    { id: 1, name: 'Amit Sharma', email: 'amit@example.com' },
    { id: 2, name: 'Sara Khan', email: 'sara@example.com' },
    { id: 3, name: 'Rahul Verma', email: 'rahul@example.com' }
  ];

  newName: string = '';
  newEmail: string = '';

  addUser() {
    if (this.newName.trim() && this.newEmail.trim()) {
      const newUser = {
        id: this.users.length + 1,
        name: this.newName,
        email: this.newEmail
      };
      this.users.push(newUser);
      this.newName = '';
      this.newEmail = '';
    }
  }

  deleteUser(id: number) {
  this.users = this.users.filter(user => user.id !== id);
}


editingUserId: number | null = null;
editedName: string = '';
editedEmail: string = '';

startEditing(user: User) {
  this.editingUserId = user.id;
  this.editedName = user.name;
  this.editedEmail = user.email;
}

saveUser(user: User) {
  if (this.editedName.trim() && this.editedEmail.trim()) {
    user.name = this.editedName;
    user.email = this.editedEmail;
    this.editingUserId = null;
  }
}

cancelEdit() {
  this.editingUserId = null;
}

}




interface User {
  id: number;
  name: string;
  email: string;
}
