type User = {
    username: string;
    registrationDate: Date;
    messageCount: number;
    warningsCount: number;
};

class TrustedUser {
    private user: User;

    constructor(user: User) {
        this.user = user;
    }

    getConfidenceRatio(): number {
        const daysSinceRegistration = (new Date().getTime() - this.user.registrationDate.getTime()) / (1000 * 3600 * 24);
        return this.user.messageCount * 2 - this.user.warningsCount * 100 + daysSinceRegistration;
    }

    get username(): string {
        return this.user.username;
    }
}


class ConfidenceHelper {
    static checkConfidenceRatio(user: TrustedUser): boolean {
        return user.getConfidenceRatio() >= 0;
    }
}

const users: User[] = [
    { username: "User1", registrationDate: new Date("2020-01-01"), messageCount: 10, warningsCount: 0 },
    { username: "User2", registrationDate: new Date("2021-01-01"), messageCount: 5, warningsCount: 2 },
    { username: "Alice", registrationDate: new Date("2019-05-01"), messageCount: 15, warningsCount: 111 },
    { username: "Bob", registrationDate: new Date("2020-06-15"), messageCount: 8, warningsCount: 0 },
    { username: "Carol", registrationDate: new Date("2021-07-20"), messageCount: 20, warningsCount: 200 },
    { username: "Dave", registrationDate: new Date("2021-08-05"), messageCount: 52, warningsCount: 0 },
    { username: "Eve", registrationDate: new Date("2019-12-30"), messageCount: 30, warningsCount: 1 },
    { username: "Frank", registrationDate: new Date("2021-01-01"), messageCount: 10, warningsCount: 3 },
    { username: "Grace", registrationDate: new Date("2020-02-18"), messageCount: 12, warningsCount: 1 },
    { username: "Heidi", registrationDate: new Date("2020-11-11"), messageCount: 7, warningsCount: 0 },
    { username: "Ivan", registrationDate: new Date("2021-09-09"), messageCount: 4, warningsCount: 20 },
    { username: "Judy", registrationDate: new Date("2021-03-03"), messageCount: 9, warningsCount: 41 }
];

const untrustedUsers = users 
    .map(user => new TrustedUser(user))
    .filter(trustedUser => !ConfidenceHelper.checkConfidenceRatio(trustedUser));

console.log("Untrusted Users:", untrustedUsers.map(user => user.username));
  

// Сопроводительный текст
// С помощью класса TrustedUser и статического класса-хелпера ConfidenceHelper 
// мы успешно реализовали функционал для оценки доверия к пользователям на форуме. 
// TrustedUser принимает объект User и рассчитывает коэффициент доверия на основе 
// количества сообщений, предупреждений и срока регистрации. ConfidenceHelper 
// используется для определения, доверяет ли форум пользователю, основываясь на 
// коэффициенте доверия. Это обеспечивает удобный и гибкий способ управления доверием 
// к пользователям, позволяя легко адаптировать критерии и добавлять новые функции 
// по мере развития форума. 