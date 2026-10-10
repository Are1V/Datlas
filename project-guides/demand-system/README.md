# Demand forecasting system

Build a retrainable forecasting pipeline with horizon-aware evaluation.

## Project brief

- **Dataset:** [M5 forecasting data](https://www.kaggle.com/competitions/m5-forecasting-accuracy/data)
- **Prerequisites:** Chapter 17, Chapter 22, Chapter 30, Chapter 31, Chapter 32
- **Deliverable:** A batch forecast pipeline and monitoring report. Free Kaggle account required for data.

## Objectives

- Create backfills
- Evaluate multiple horizons
- Monitor forecasts

## Evaluation

Beat seasonal naive; test missing periods, delayed inputs, and changing demand.

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

