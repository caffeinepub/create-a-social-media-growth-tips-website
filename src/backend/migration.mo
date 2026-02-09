import Map "mo:core/Map";
import Text "mo:core/Text";
import Nat "mo:core/Nat";

module {
  type OldActor = {};
  type NewActor = {
    clickCounts : Map.Map<Text, Nat>;
  };

  public func run(_old : OldActor) : NewActor {
    {
      clickCounts = Map.empty<Text, Nat>();
    };
  };
};
