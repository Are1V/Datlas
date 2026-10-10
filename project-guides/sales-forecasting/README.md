# Sales forecasting

Forecast retail demand at an explicit horizon using only historical information.

## Project brief

- **Dataset:** [M5 forecasting data](https://www.kaggle.com/competitions/m5-forecasting-accuracy/data)
- **Prerequisites:** Chapter 08, Chapter 13, Chapter 17, Chapter 22
- **Deliverable:** A rolling-origin backtest and forecast report. Free Kaggle account required for data.

## Objectives

- Construct lag features
- Backtest chronologically
- Compare forecast baselines

## Evaluation

Compare against seasonal naive and report errors by horizon and item volume.

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

