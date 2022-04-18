/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/enneagram_types": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.enneagram_types.id"];
          name?: parameters["rowFilter.enneagram_types.name"];
          description?: parameters["rowFilter.enneagram_types.description"];
          url?: parameters["rowFilter.enneagram_types.url"];
          is_archived?: parameters["rowFilter.enneagram_types.is_archived"];
          number?: parameters["rowFilter.enneagram_types.number"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["enneagram_types"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** enneagram_types */
          enneagram_types?: definitions["enneagram_types"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.enneagram_types.id"];
          name?: parameters["rowFilter.enneagram_types.name"];
          description?: parameters["rowFilter.enneagram_types.description"];
          url?: parameters["rowFilter.enneagram_types.url"];
          is_archived?: parameters["rowFilter.enneagram_types.is_archived"];
          number?: parameters["rowFilter.enneagram_types.number"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.enneagram_types.id"];
          name?: parameters["rowFilter.enneagram_types.name"];
          description?: parameters["rowFilter.enneagram_types.description"];
          url?: parameters["rowFilter.enneagram_types.url"];
          is_archived?: parameters["rowFilter.enneagram_types.is_archived"];
          number?: parameters["rowFilter.enneagram_types.number"];
        };
        body: {
          /** enneagram_types */
          enneagram_types?: definitions["enneagram_types"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/personality_colors": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.personality_colors.id"];
          name?: parameters["rowFilter.personality_colors.name"];
          description?: parameters["rowFilter.personality_colors.description"];
          url?: parameters["rowFilter.personality_colors.url"];
          is_archived?: parameters["rowFilter.personality_colors.is_archived"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["personality_colors"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** personality_colors */
          personality_colors?: definitions["personality_colors"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.personality_colors.id"];
          name?: parameters["rowFilter.personality_colors.name"];
          description?: parameters["rowFilter.personality_colors.description"];
          url?: parameters["rowFilter.personality_colors.url"];
          is_archived?: parameters["rowFilter.personality_colors.is_archived"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.personality_colors.id"];
          name?: parameters["rowFilter.personality_colors.name"];
          description?: parameters["rowFilter.personality_colors.description"];
          url?: parameters["rowFilter.personality_colors.url"];
          is_archived?: parameters["rowFilter.personality_colors.is_archived"];
        };
        body: {
          /** personality_colors */
          personality_colors?: definitions["personality_colors"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/personality_types": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.personality_types.id"];
          name?: parameters["rowFilter.personality_types.name"];
          description?: parameters["rowFilter.personality_types.description"];
          is_archived?: parameters["rowFilter.personality_types.is_archived"];
          url?: parameters["rowFilter.personality_types.url"];
          type?: parameters["rowFilter.personality_types.type"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["personality_types"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** personality_types */
          personality_types?: definitions["personality_types"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.personality_types.id"];
          name?: parameters["rowFilter.personality_types.name"];
          description?: parameters["rowFilter.personality_types.description"];
          is_archived?: parameters["rowFilter.personality_types.is_archived"];
          url?: parameters["rowFilter.personality_types.url"];
          type?: parameters["rowFilter.personality_types.type"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.personality_types.id"];
          name?: parameters["rowFilter.personality_types.name"];
          description?: parameters["rowFilter.personality_types.description"];
          is_archived?: parameters["rowFilter.personality_types.is_archived"];
          url?: parameters["rowFilter.personality_types.url"];
          type?: parameters["rowFilter.personality_types.type"];
        };
        body: {
          /** personality_types */
          personality_types?: definitions["personality_types"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/profiles": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          username?: parameters["rowFilter.profiles.username"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
          website?: parameters["rowFilter.profiles.website"];
          communication_style?: parameters["rowFilter.profiles.communication_style"];
          personality_type_id?: parameters["rowFilter.profiles.personality_type_id"];
          enneagram_type_id?: parameters["rowFilter.profiles.enneagram_type_id"];
          personality_color_id?: parameters["rowFilter.profiles.personality_color_id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["profiles"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          username?: parameters["rowFilter.profiles.username"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
          website?: parameters["rowFilter.profiles.website"];
          communication_style?: parameters["rowFilter.profiles.communication_style"];
          personality_type_id?: parameters["rowFilter.profiles.personality_type_id"];
          enneagram_type_id?: parameters["rowFilter.profiles.enneagram_type_id"];
          personality_color_id?: parameters["rowFilter.profiles.personality_color_id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          username?: parameters["rowFilter.profiles.username"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
          website?: parameters["rowFilter.profiles.website"];
          communication_style?: parameters["rowFilter.profiles.communication_style"];
          personality_type_id?: parameters["rowFilter.profiles.personality_type_id"];
          enneagram_type_id?: parameters["rowFilter.profiles.enneagram_type_id"];
          personality_color_id?: parameters["rowFilter.profiles.personality_color_id"];
        };
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/rpc/featured_users": {
    post: {
      parameters: {
        body: {
          args: {
            /** Format: integer */
            user_count?: number;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
}

export interface definitions {
  enneagram_types: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /** Format: character varying */
    name?: string;
    /** Format: text */
    description?: string;
    /** Format: text */
    url?: string;
    /** Format: boolean */
    is_archived?: boolean;
    /** Format: smallint */
    number?: number;
  };
  personality_colors: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /** Format: character varying */
    name?: string;
    /** Format: text */
    description?: string;
    /** Format: text */
    url?: string;
    /** Format: boolean */
    is_archived?: boolean;
  };
  personality_types: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /** Format: character varying */
    name?: string;
    /** Format: text */
    description?: string;
    /** Format: boolean */
    is_archived?: boolean;
    /** Format: text */
    url?: string;
    /** Format: character varying */
    type?: string;
  };
  profiles: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /** Format: character varying */
    username: string;
    /** Format: character varying */
    avatar_url?: string;
    /** Format: character varying */
    website?: string;
    /** Format: character varying */
    communication_style?: string;
    /**
     * Format: bigint
     * @description Note:
     * This is a Foreign Key to `personality_types.id`.<fk table='personality_types' column='id'/>
     */
    personality_type_id?: number;
    /**
     * Format: bigint
     * @description Note:
     * This is a Foreign Key to `enneagram_types.id`.<fk table='enneagram_types' column='id'/>
     */
    enneagram_type_id?: number;
    /**
     * Format: bigint
     * @description Note:
     * This is a Foreign Key to `personality_colors.id`.<fk table='personality_colors' column='id'/>
     */
    personality_color_id?: number;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description enneagram_types */
  "body.enneagram_types": definitions["enneagram_types"];
  /** Format: bigint */
  "rowFilter.enneagram_types.id": string;
  /** Format: character varying */
  "rowFilter.enneagram_types.name": string;
  /** Format: text */
  "rowFilter.enneagram_types.description": string;
  /** Format: text */
  "rowFilter.enneagram_types.url": string;
  /** Format: boolean */
  "rowFilter.enneagram_types.is_archived": string;
  /** Format: smallint */
  "rowFilter.enneagram_types.number": string;
  /** @description personality_colors */
  "body.personality_colors": definitions["personality_colors"];
  /** Format: bigint */
  "rowFilter.personality_colors.id": string;
  /** Format: character varying */
  "rowFilter.personality_colors.name": string;
  /** Format: text */
  "rowFilter.personality_colors.description": string;
  /** Format: text */
  "rowFilter.personality_colors.url": string;
  /** Format: boolean */
  "rowFilter.personality_colors.is_archived": string;
  /** @description personality_types */
  "body.personality_types": definitions["personality_types"];
  /** Format: bigint */
  "rowFilter.personality_types.id": string;
  /** Format: character varying */
  "rowFilter.personality_types.name": string;
  /** Format: text */
  "rowFilter.personality_types.description": string;
  /** Format: boolean */
  "rowFilter.personality_types.is_archived": string;
  /** Format: text */
  "rowFilter.personality_types.url": string;
  /** Format: character varying */
  "rowFilter.personality_types.type": string;
  /** @description profiles */
  "body.profiles": definitions["profiles"];
  /** Format: uuid */
  "rowFilter.profiles.id": string;
  /** Format: character varying */
  "rowFilter.profiles.username": string;
  /** Format: character varying */
  "rowFilter.profiles.avatar_url": string;
  /** Format: character varying */
  "rowFilter.profiles.website": string;
  /** Format: character varying */
  "rowFilter.profiles.communication_style": string;
  /** Format: bigint */
  "rowFilter.profiles.personality_type_id": string;
  /** Format: bigint */
  "rowFilter.profiles.enneagram_type_id": string;
  /** Format: bigint */
  "rowFilter.profiles.personality_color_id": string;
}

export interface operations {}

export interface external {}
