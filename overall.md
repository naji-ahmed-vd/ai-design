## Figma Make

## Pros

1. Provides other API models like Sonnet 4.6, Gemini Pro, Gemini Flash
2. Provides a proper implementation using stack like React, React Router and Tailwind.
3. Uses design libraries rather than writing custom UI all the time with Tailwind.
4. It follows the instructions well and uses them as a reference in our design.
5. You can use existing designs and ask Figma Make to replicate them and also amend changes as if making them mobile responsive etc
6. It works very well with how much detailed the prompts are
7. Provides a live editor environment to run the generated designs
8. We can provide Attributes.md and Guidelines.md files:
    . Guidelines.md: It helps aligning with your exptections which includes coding habits, design system, general rules or how designs elements should be treated.
    - Attributes.md: Provides the lists of assets or components that are used in the project.


## Cons

1. It doesn't allow to export all images like Stitch.io
2. Free version and paid version has discrepancies
    - See the results of different prompts on free and paid
    - Opus model wasn't included in free model but in paid version of Figma Make
3. Extremly slow against Stitch.io for likely as it creats separate files
4. Some times the free version works better than the paid one

---

## Sitch.io

## Pros

1. It allow us to export the designs into multiple AI tools
    - Jules
    - MCP Server
    - AI Studio
    - Figma
2. It works well with less prompts as it created appealing UIs according to the device we select
3. We can create multiple variations from a single prompt
4. You can create design systems on the go and the designs will be based off that
5. Blazingly fast even with the big prompts it creates designed super quickly

## Cons

1. It doesn't export code in React or Angular
2. Code is scaffolded around HTML and Tailwind only
3. There is no consideration around libraries or design specifications

----------

## Experiments

1. Ask tools to create designs based of user provided prompt
2. Ask to create a UI based on React to use Material design of ShadCN
3. Ask AI to create a prompt based off a picture and ask tools to create it
4. Ask to create a design off a single line