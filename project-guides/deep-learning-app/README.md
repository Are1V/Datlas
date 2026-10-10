# Deep learning application

Train an image classifier and investigate robustness beyond a single score.

## Project brief

- **Dataset:** [CIFAR-10](https://www.cs.toronto.edu/~kriz/cifar.html)
- **Prerequisites:** Chapter 17, Chapter 23, Chapter 25, Chapter 31, Chapter 33
- **Deliverable:** A reproducible PyTorch training run, model card, and small demo.

## Objectives

- Use transfer learning
- Track training
- Test distribution shifts

## Evaluation

Compare a baseline, use a separate validation set, and test corruptions.

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

