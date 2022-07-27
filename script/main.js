const ajax = async () => {
    const result = await Promise.all([
        axios
            .post("cors-anywhere.herokuapp.com/https://api.wayforpay.com/api", {
                transactionType: "CREATE_INVOICE",
                merchantAccount: "freelance_user_62d90ef3216c1",
                merchantAuthType: "SimpleSignature",
                merchantDomainName: "wayforpay.com/freelance",
                merchantSignature: "15cef53f308c9162e2edf1ce07c22cecb2b592bd",
                apiVersion: 1,
                orderReference: "myOrder1",
                orderDate: 1421412898,
                amount: 1547.36,
                currency: "UAH",
                orderTimeout: 86400,
                productName: ["iphone x", "samsung A21"],
                productPrice: [70.6, 50.49],
                productCount: [1, 2],
                clientFirstName: "poderevlianskiy",
                clientLastName: "less",
                clientEmail: "taras889226@gmail.com",
                clientPhone: "380997777888",
            })
            .then(response => {
                console.log(response);
            }),
    ]);
};

ajax();