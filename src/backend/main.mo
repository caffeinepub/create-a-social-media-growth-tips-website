import Map "mo:core/Map";
import Text "mo:core/Text";
import Nat "mo:core/Nat";



actor {
  let clickCounts = Map.empty<Text, Nat>();

  public shared ({ caller }) func recordClick(buttonId : Text) : async () {
    let newCount = switch (clickCounts.get(buttonId)) {
      case (null) { 1 };
      case (?currentCount) { currentCount + 1 };
    };
    clickCounts.add(buttonId, newCount);
  };

  public query ({ caller }) func getClickCount(buttonId : Text) : async Nat {
    switch (clickCounts.get(buttonId)) {
      case (null) { 0 };
      case (?count) { count };
    };
  };

  public query ({ caller }) func getAllClickCounts() : async [(Text, Nat)] {
    clickCounts.toArray();
  };
};
