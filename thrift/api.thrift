namespace cpp api
namespace java api
namespace php api

typedef i32 Id

exception NotExist {
  1: Id id,
  2: string message,
}

enum ConsumerType {
  PERSON = 1,
  COMPANY = 2,
}

struct Consumer {
  1: Id id,
  2: string name,
  3: ConsumerType type,
}

service API {
  Consumer createConsumer(1:Consumer consumer),
  Consumer updateConsumer(1:Id id, 2:Consumer consumer),
  void removeConsumer(1:Id id),
  Consumer getConsumer(1:Id id) throws (1:NotExist err),
  list<Consumer> getConsumers(),
}
