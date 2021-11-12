/**
 * The model that represents a star wars character
 */
export interface ApiPerson {
  /**
   * The full name of the star wars person
   */
  name: string;

  /**
   * The height of the person
   */
  height: number;

  /**
   * the mass of the character
   */
  mass: number;

  /**
   * The hair color of the character
   */
  hair_color: string;

  /**
   * The skin color of the character
   */
  skin_color: string;

  /**
   * The eye color of the character
   */
  eye_color: string;

  /**
   * The birth year of the character
   */
  birth_year: string;

  /**
   * The gender of the character
   */
  gender: string;

  /**
   * the URI string of the homeworld of the character
   */
  homeworld: string;

  /**
   * films the character appeared in
   */
  films: string[];
}
