interface ISupportHandler {
    setNext(handler: ISupportHandler): ISupportHandler;
    handle(request: SupportRequest): void;
}

class SupportRequest {
    constructor(public type: string, public description: string) {}
}

class BaseSupportHandler implements ISupportHandler {
    protected nextHandler: ISupportHandler;

    setNext(handler: ISupportHandler): ISupportHandler {
        this.nextHandler = handler;
        return handler;
    }

    handle(request: SupportRequest): void {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        } else {
            console.log('No support handler found for request:', request.description);
        }
    }
}

class BasicSupportHandler extends BaseSupportHandler {
    handle(request: SupportRequest): void {
        if (request.type === 'basic') {
            console.log('Basic support handled - ', request.description);
        } else {
            super.handle(request);
        }
    }
}

class TechnicalSupportHandler extends BaseSupportHandler {
    handle(request: SupportRequest): void {
        if (request.type === 'technical') {
            console.log('Technical support handled - ', request.description);
        } else {
            super.handle(request);
        }
    }
}

class HardWareSupportHandler extends BaseSupportHandler {
    handle(request: SupportRequest): void {
        if (request.type === 'hardware') {
            console.log('Hardware support handled - ', request.description);
        } else {
            super.handle(request);
        }
    }
}

class AccountSupportHandler extends BaseSupportHandler {
    handle(request: SupportRequest): void {
        if (request.type === 'account') {
            console.log('Account support handled - ', request.description);
        } else {
            super.handle(request);
        }
    }
}

let main = () => {
    let basic = new BasicSupportHandler();
    let technical = new TechnicalSupportHandler();
    let hardware = new HardWareSupportHandler();
    let account = new AccountSupportHandler();

    basic.setNext(technical).setNext(hardware).setNext(account);

    basic.handle(new SupportRequest('basic', 'Basic support request'));
    basic.handle(new SupportRequest('technical', 'Technical support request'));
    basic.handle(new SupportRequest('hardware', 'Hardware support request'));
    basic.handle(new SupportRequest('account', 'Account support request'));
    basic.handle(new SupportRequest('school', 'School problem'));
}

main();