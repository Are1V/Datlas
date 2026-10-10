# NLP sentiment classifier

Classify review sentiment and explain where the model fails.

## Project brief

- **Dataset:** [Stanford IMDB reviews](https://ai.stanford.edu/~amaas/data/sentiment/)
- **Prerequisites:** Chapter 14, Chapter 16, Chapter 17, Chapter 24
- **Deliverable:** A text pipeline, evaluation report, and examples of systematic errors.

## Objectives

- Vectorize text
- Avoid text leakage
- Analyze linguistic errors

## Evaluation

Compare TF-IDF with embeddings; inspect negation and out-of-domain failures.

## Suggested repository structure

```text
data/README.md
notebooks/01-exploration.ipynb
src/data.py
src/train.py
src/evaluate.py
tests/
reports/
requirements.txt
README.md
```

## Start here

1. Create the folders shown above.
2. Record the dataset source and license in `data/README.md`.
3. Build the simplest defensible baseline first.
4. Keep validation data separate from model decisions.
5. Report errors, assumptions, and limitations with the final result.

Return to the [Datlas project library](https://are1v.github.io/Datlas/projects/).

