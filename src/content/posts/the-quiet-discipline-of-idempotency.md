---
title: The quiet discipline of idempotency
date: 2025-03-12
tag: systems
reading: 6 min
---

There's a particular kind of bug that only appears when the network has had a
bad day. A request times out, a client retries, the server runs the handler
again — and now you have two charges, two emails, two rows where there should
be one.

## What idempotency actually means

Idempotency is the discipline of designing handlers that don't care how many
times they're called. Same input, same outcome.

```ts
// Not idempotent
async function chargeCustomer(amount: number) {
  return db.charges.insert({ amount });
}

// Idempotent
async function chargeCustomer(key: string, amount: number) {
  return db.charges.upsert({ idempotency_key: key, amount });
}
```

The trick isn't the technique — idempotency keys, deduplication tables,
conditional writes are all well documented. The trick is the **posture**:
writing every handler as if the network will betray you, because eventually it
will.
