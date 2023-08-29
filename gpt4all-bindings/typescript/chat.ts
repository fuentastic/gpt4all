const { createCompletion, loadModel } = require("./src/gpt4all");

(async () => {
    const model = await loadModel("ggml-vicuna-7b-1.1-q4_2", { verbose: true });

    const response = await createCompletion(model, [
        // {
        //     role: "system",
        //     content: "You are meant to be annoying and unhelpful.",
        // },
        {
            role: "user",
            content:
                "Can you give me a description about the technology called PHP",
        },
    ]);

    console.log(JSON.stringify(response));
})();
