export class Hero {
    private enemy;
    private health;

    private range: boolean = false;
    private lifeStatus: boolean = true;
    private hasEnemy: boolean = false;
    private ready: boolean = false;

    constructor(private strength,
                private agility,
                private intelligence,
                private maxHealth,
                private damage,) {
        this.health = maxHealth;
    }

    public setHealth(health) {
        this.health = health;
        this.checkLifeStatus();
    }

    public plusHealth(value) {
        this.health += value;
        this.checkLifeStatus();
    }

    public checkLifeStatus() {
        if (this.health <= 0) {
            this.lifeStatus = false;
            this.health = 0;
        }
    }

    public getLifeStatus() {
        return this.lifeStatus;
    }

    public getHealth() {
        return this.health;
    }

    public getMaxHealth() {
        return this.maxHealth;
    }

    public getStrength() {
        return this.strength;
    }

    public getAgility() {
        return this.agility;
    }

    public getIntelligence() {
        return this.intelligence;
    }

    public getDamage() {
        return this.damage;
    }

    public isReady() {
        return this.ready;
    }

    public setReady(status: boolean) {
        this.ready = status;
    }

    public toggleReady() {
        this.ready = !this.ready;
    }

    public getEnemy(): Hero {
        return this.enemy;
    }

    public getHasEnemy(): boolean {
        return this.hasEnemy;
    }

    public setEnemy(enemy: Hero) {
        this.enemy = enemy;
        this.hasEnemy = true;
    }

    public hitEnemy() {
        this.enemy.plusHealth(-this.damage);
        if (!this.enemy.getLifeStatus()) {
            this.hasEnemy = false;
        }
    }

}