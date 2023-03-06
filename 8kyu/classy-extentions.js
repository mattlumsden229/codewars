// create cat class that is an extension of animal.

class Cat extends Animal {
    // change speak method to a meows
    speak() {
        return `${this.name} meows.`
    }
}