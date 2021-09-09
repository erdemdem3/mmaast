// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class OutboxEntry extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("outboxEntryIndex", Value.fromBigInt(BigInt.zero()));
    this.set("outputRoot", Value.fromBytes(Bytes.empty()));
    this.set("numInBatch", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save OutboxEntry entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save OutboxEntry entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("OutboxEntry", id.toString(), this);
    }
  }

  static load(id: string): OutboxEntry | null {
    return changetype<OutboxEntry | null>(store.get("OutboxEntry", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get outboxEntryIndex(): BigInt {
    let value = this.get("outboxEntryIndex");
    return value!.toBigInt();
  }

  set outboxEntryIndex(value: BigInt) {
    this.set("outboxEntryIndex", Value.fromBigInt(value));
  }

  get outputRoot(): Bytes {
    let value = this.get("outputRoot");
    return value!.toBytes();
  }

  set outputRoot(value: Bytes) {
    this.set("outputRoot", Value.fromBytes(value));
  }

  get numInBatch(): BigInt {
    let value = this.get("numInBatch");
    return value!.toBigInt();
  }

  set numInBatch(value: BigInt) {
    this.set("numInBatch", Value.fromBigInt(value));
  }

  get spentOutput(): Array<string> | null {
    let value = this.get("spentOutput");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set spentOutput(value: Array<string> | null) {
    if (!value) {
      this.unset("spentOutput");
    } else {
      this.set("spentOutput", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class OutboxOutput extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("destAddr", Value.fromBytes(Bytes.empty()));
    this.set("l2Sender", Value.fromBytes(Bytes.empty()));
    this.set("path", Value.fromBigInt(BigInt.zero()));
    this.set("outboxEntry", Value.fromString(""));
    this.set("spent", Value.fromBoolean(false));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save OutboxOutput entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save OutboxOutput entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("OutboxOutput", id.toString(), this);
    }
  }

  static load(id: string): OutboxOutput | null {
    return changetype<OutboxOutput | null>(store.get("OutboxOutput", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get destAddr(): Bytes {
    let value = this.get("destAddr");
    return value!.toBytes();
  }

  set destAddr(value: Bytes) {
    this.set("destAddr", Value.fromBytes(value));
  }

  get l2Sender(): Bytes {
    let value = this.get("l2Sender");
    return value!.toBytes();
  }

  set l2Sender(value: Bytes) {
    this.set("l2Sender", Value.fromBytes(value));
  }

  get path(): BigInt {
    let value = this.get("path");
    return value!.toBigInt();
  }

  set path(value: BigInt) {
    this.set("path", Value.fromBigInt(value));
  }

  get outboxEntry(): string {
    let value = this.get("outboxEntry");
    return value!.toString();
  }

  set outboxEntry(value: string) {
    this.set("outboxEntry", Value.fromString(value));
  }

  get spent(): boolean {
    let value = this.get("spent");
    return value!.toBoolean();
  }

  set spent(value: boolean) {
    this.set("spent", Value.fromBoolean(value));
  }
}

export class InboxMessage extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("isProcessed", Value.fromBoolean(false));
    this.set("kind", Value.fromString(""));
    this.set("value", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save InboxMessage entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save InboxMessage entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("InboxMessage", id.toString(), this);
    }
  }

  static load(id: string): InboxMessage | null {
    return changetype<InboxMessage | null>(store.get("InboxMessage", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get isProcessed(): boolean {
    let value = this.get("isProcessed");
    return value!.toBoolean();
  }

  set isProcessed(value: boolean) {
    this.set("isProcessed", Value.fromBoolean(value));
  }

  get kind(): string {
    let value = this.get("kind");
    return value!.toString();
  }

  set kind(value: string) {
    this.set("kind", Value.fromString(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value!.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get destAddr(): Bytes | null {
    let value = this.get("destAddr");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set destAddr(value: Bytes | null) {
    if (!value) {
      this.unset("destAddr");
    } else {
      this.set("destAddr", Value.fromBytes(<Bytes>value));
    }
  }
}
