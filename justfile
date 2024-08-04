ui:
    cd client && npm run dev
backend:
    cargo run
types:
    typester --input=./src/types.rs --output=./client/src/types.d.ts
